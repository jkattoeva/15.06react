import axios from "axios";

function ArticleCreate() {

  function onFormSubmit(event) {
    event.preventDefault();

    console.log(event);
    console.log(this);

    //Direct and simple
    // alert(`${event.target[0].value} ${event.target[1].value}`);

    //Better way
    const formData = new FormData(event.target);
    // alert(`Hello ${formData.get('first_name')} ${formData.get('last_name')}!`);

    axios.post(
      'https://crud2-149a4-default-rtdb.firebaseio.com/articles.json', 
      Object.fromEntries(formData.entries())
    );
  }


  return ( 
    <>
    <form onSubmit={onFormSubmit} className="ArticleCreate">
      <div>
        <label>
          Title
          <input type="text" name="title" required />
        </label>
        
        <div>
          <label>
          Description
          <textarea type="text" name="description" required ></textarea>
        </label>
        </div>
        <button>Submit</button>
      </div>
    </form>
    </>
  );
}

export default ArticleCreate;