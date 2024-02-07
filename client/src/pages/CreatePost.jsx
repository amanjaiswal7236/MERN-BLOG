import { Button, FileInput, Select, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreatePost() {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
        <h1 className='text-center text-3xl my-7 font-semibold'>Create a Post</h1>
        <form action="" className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4 sm:flex-row justify-between'>
                <TextInput type='text' label='Title' placeholder='Enter title' className='flex-1' />
                <Select>
                    <option value="uncategorized">Select a category</option>
                    <option value="javascript">JavaScript</option>
                    <option value="express">express</option>
                    <option value="react">React</option>
                </Select>
            </div>
            <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
                <FileInput type='file' label='Upload Image' accept='image/*'/>
                <Button type='button' gradientDuoTone='purpleToBlue' size='sm' outline>Upload Image</Button>
            </div>
            <ReactQuill theme="snow" placeholder='Write something...' className='h-72 mb-12' required/>
            <Button type='submit' gradientDuoTone='purpleToPink' size='lg'>Publish</Button>
        </form>
    </div>
  )
}

export default CreatePost