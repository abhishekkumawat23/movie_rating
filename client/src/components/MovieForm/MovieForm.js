import { useForm } from "react-hook-form";
import { Upload } from "upload-js";
import axios from "axios";

const upload = Upload({ apiKey: "public_FW25bHLGbaDdeKnMdQ9wqn6nedEE" });

const MovieForm = () => {
    const { register, handleSubmit } = useForm();
    let movieImageUrl = '';

    async function onSubmitHandler(data) {
        const dataToSave = {};
        dataToSave.title = data.title;
        dataToSave.rating = data.rating;
        dataToSave.image = movieImageUrl;
        // console.log(dataToSave);
        const response = await axios.post("http://localhost:9000/movies", dataToSave);
        console.log(response);
    }

    async function onFileSelected (event) {
        const [ file ]    = event.target.files;
        const { fileUrl } = await upload.uploadFile(file, { onProgress });
        movieImageUrl = fileUrl;
        // alert(`File uploaded: ${fileUrl}`);
    }

    const onProgress = ({ progress }) => {
        console.log(`File uploading: ${progress}% complete.`)
    }

    return (
        <div className="box">
            <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
                <h2>Add a movie</h2>
                <div className="inputBox">
                    <span>Movie title</span>
                    <input type="text" {...register('title', { required: true })} />
                    <i></i>
                </div>
                <div className="inputBox">
                    <span>Upload movie image</span>
                    <input type="file" {...register('image', {required: true})} onChange={onFileSelected} />
                    <i></i>
                </div>
                <div className="inputBox">
                    <span>Rating</span>
                    <input type="text" {...register('rating', { required: true })} />
                    <i></i>
                </div>
                <br />
                <button name="addMovieButton" type="submit">Add movie</button>
            </form>
        </div>
    );
}

export default MovieForm;