"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react'
import Image from 'next/image';
import { loader } from '../../../../public/assets';
import { useLazyGetImageQuery } from '../../redux/services';

interface ErrorData {
    error: string;
}

const Demo = () => {
    const [image, setImage] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");

    const [getImage, { error, isFetching }] = useLazyGetImageQuery()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { data } = await getImage({ imageUrl: image });
        console.log(data)
        if (data?.model) {
            setImageUrl(data.model);
        } else {
            console.log("something wrong buddy")
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement> | any) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    }

    return (
        <main className='mt-10'>
            <form onSubmit={handleSubmit} className='relative flex justify-center items-center'>
                <input
                    placeholder='enter your prompt'
                    value={image}
                    required
                    onKeyDown={handleKeyDown}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setImage(e.target.value)}
                    className='block w-full rounded-md border border-gray-200 py-2.5 pl-10 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0'
                />
                <button
                    type='submit'
                    className='hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400 peer-focus:border-gray-700 peer-focus:text-gray-700 '
                >
                    <p>↵</p>
                </button>
            </form>

            <div className='flex'>
                {isFetching ? (
                    <Image src={loader} alt='loader' className='object-contain' width={20} height={20} />
                ) : error ? (
                    <p className='font-inter font-bold text-black text-center'>
                        Well, that wasnt supposed to happen...
                        <br />
                        <span className='font-satoshi font-normal text-gray-700'>
                            {error && 'data' in error ? (error.data as ErrorData).error : ""}
                        </span>
                    </p>
                ) : (
                    (imageUrl && image) && (
                        <div className='flex flex-col gap-3'>
                            <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                                Generated{" "}
                                <span className="font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                    Image
                                </span>
                            </h2>
                            <div className="rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4">
                                <Image
                                    src={imageUrl}
                                    alt="Generated Image"
                                    className="w-full h-auto"
                                    width={400}
                                    height={500}
                                />
                            </div>
                        </div>
                    )
                )}
            </div>
        </main>
    )
}

export default Demo