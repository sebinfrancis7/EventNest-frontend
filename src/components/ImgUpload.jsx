import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';
import {DropzoneDialog} from 'material-ui-dropzone'

function ImgUpload({ details,setDetails,open,setOpen,handleChange,files,setFiles,filesLimit }) {
    const [ posting, setPosting ] = useState(false);

    function handleClose() {
        setOpen(false);
    }

    function handleSave(nfiles) {
		setFiles(nfiles);
		setPosting(true);
		const formData = new FormData();
		if(nfiles)
		{
			formData.append(
				'image',
				nfiles[0],
				nfiles[0].name
				)
			axios
				.post('https://eventnest-server.herokuapp.com/public/images', formData)
				.then(res => {
					setDetails({...details, image_url: res?.data?.url});
					setPosting(false);
				})
				.catch(err => console.log(err))
		}
		setOpen(false);
    }

    function handleOpen() {
        setOpen(true)
    }

    if(posting) {
        return (
            <div>
            Uploading ...
            </div>
        )
    }
    if(details.image_url) {
        return (
            <div>
            <Button onClick={() => setDetails({...details, image_url: null}) }
                style={{
                    position: "absolute",
                    transform: `translate(${-50}%, ${-50}%)`, 
                    backgroundColor: "#555",
                    color: "white",
                  }}
            >
                x
            </Button>
            <img src={details.image_url} alt="f bruh" width="250" height="300"></img>
            </div>
        )
    }
    return(
        <div>
            <TextField
                fullWidth
                id="image_url"
                label="Banner Image URL"
                margin="normal"
                name="image_url"
                onChange={handleChange}
                value={details.image_url}
                variant="outlined"
            />
            <div>
                <Button onClick={handleOpen}>
                    or Add Image
                </Button>
                <DropzoneDialog
                    open={open}
                    onSave={handleSave}
                    acceptedFiles={['image/jpeg', 'image/png']}
                    showPreviews={true}
                    maxFileSize={5000000}
                    filesLimit={filesLimit}
                    onClose={handleClose}
                />
            </div>
        </div>
    )
}

export default ImgUpload;