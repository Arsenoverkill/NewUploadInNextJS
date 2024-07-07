"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import scss from "./HomePage.module.scss";

interface FormType {
  title: string;
  file: string;
}

const HomePage = () => {
  const [dataUrl, setDataUrl] = useState<FormType[]>([]);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormType>();
  const onSubmit: SubmitHandler<FormType> = async (data) => {
    const file = data.file[0];
    const formData = new FormData();
    formData.append("avatar", file);
    let { data: responseUrl } = await axios.post(
      "https://api-peakspace.elcho.dev/api/v1/upload/avatar",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const newObj = {
      title: data.title,
      file: responseUrl.url,
    };
    const { data: responseData } = await axios.post(
      "https://api.elchocrud.pro/api/v1/8acfdea5c292e6147e370edb9b86ec59/newUpload",
      newObj
    );
    setDataUrl(responseData);
  };
  async function getUrlDatas() {
    const { data } = await axios(
      "https://api.elchocrud.pro/api/v1/8acfdea5c292e6147e370edb9b86ec59/newUpload"
    );
    setDataUrl(data);
  }
  useEffect(() => {
    getUrlDatas();
  }, []);
  return (
    <div>
      <div className="container">
        <form className={scss.AddUrl} onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="title"
            type="text"
            {...register("title", { required: true })}
          />
          <input type="file" {...register("file", { required: true })} />
          {isSubmitting ? (
            <button type="button">Loading...</button>
          ) : (
            <button type="submit">Add</button>
          )}
        </form>
        {dataUrl.map((el, idx) => (
          <div className={scss.images} key={idx}>
            {el.title}
            <Image width={300} height={200} src={el.file} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
