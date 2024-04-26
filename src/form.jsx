import React, {useState} from "react"

function Form (){

    const [fname,setFName] = useState("")
    const [lname,setLName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setcontact] = useState("")
     const [gender, setGender] = useState("")
     const [sub, setSubject] = useState("")
    const[resume,setResume] = useState("")
    const[url,setUrl] =useState("")
    const[choice,setChoice] = useState("")
    const[about,SetAbout] =useState("")

    const handleReset =() =>{
        setFName("")
        setLName("")
        setEmail("")
        setcontact("")
        setGender("")
        setSubject("")
        setResume("")
        setUrl("")
        setChoice("")
        SetAbout("")
    
  }




    return(
        <div className="container">
            
            <form action="#">
            <h1>Form in React </h1>
            <label htmlFor="firstName">First Name</label> <br />
            <input className="biodata" type="text" id="firstName" name="firstName" value={fname} onChange={(e)=>setFName(e.target.value)} required placeholder="Enter first name" /><br /><br/>
            <label htmlFor="lastName">Last Name</label><br />
            <input className="biodata" type="text" id="lastName" name="lastName" value={lname} onChange={(e)=>setLName(e.target.value)} placeholder="Enter last name" required/><br /><br/>
            <label htmlFor="email">Email address</label><br />
            <input className="biodata" type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter  email address" required/>
            <br /> <br />
            <label htmlFor="contact">contact</label><br />
            <input className="biodata" type="tel" name="contact" id="contact" value={contact} onChange={(e)=>setcontact(e.target.value)} placeholder="Enter mobile number" required/>
            
            <br /><br />
            <p>Gender</p>
            
            <input className="choice" type="radio" name="Gender" value="Female" id="female" checked={gender ==="Female"} onChange={(e =>setGender(e.target.value) )} />
            <label htmlFor="Female">Female</label>
            
            <input className="choice" type="radio"  name="Gender"value="Male" id="male" checked={gender ==="Male"} onChange={(e=>setGender(e.target.value))} />
            <label htmlFor="Male">Male</label>
            
            <input className="choice" type="radio" name="Gender" value="Others" id="others" checked ={gender ==="Others"} onChange={(e=>setGender(e.target.value))}  />
            <label htmlFor="Others">Others</label>

            <p>Your best subject</p>
            <input className="choice" type="checkbox" name="subject" id="  Eng" value="Eng" checked={sub ==="Eng"} onChange={(e)=>setSubject(e.target.value)}  />
            <label htmlFor="">Eng</label>
            <input className="choice" type="checkbox" name="subject"id="kisw"value="kisw" checked ={sub ==="kisw"} onChange={(e)=>setSubject(e.target.value)} />
            <label htmlFor="">kisw</label>
            <input className="choice" type="checkbox" name="subject"id="math" value="math" checked={sub ==="math"} onChange={(e)=>setSubject(e.target.value)} />
            <label htmlFor="">math</label> <br /> <br />

            <label htmlFor="">Upload Resume</label><br />
            <input className="choice" type="file" name="file" id="file" onChange={(e)=>setResume(e.target.value)} required />
    <br /><br />
            <label htmlFor="">Enter URl</label> <br />
            <input className="choice" type="file" name="url" id="url" onChange={(e)=>setUrl(e.target.value)} />

            <br /><br />
             <label htmlFor="">Select your choice</label><br />
            <select name="TypeOFdeveloper" id="TypeOFdeveloper" onChange={(e)=>setChoice(e.target.value)}>
                <option value="" disabled selected={setChoice===""}>select your ans</option>
                <optgroup label="frontend">
                    <option value="Html">Html</option>
                    <option value="Css">Css</option>
                    <option value="Javascript">Javascript</option>
                </optgroup>
                <optgroup label="backend">
                     <option value="python">python</option>
                     <option value="Java">Java</option>
                     <option value="Kotlin">Kotlin</option>
                </optgroup>
            </select>

            <br /><br />
             <p>About</p>
            <textarea name="about" id="about"  placeholder="About your self" onChange={(e)=>(e.target.value)}></textarea>
            <br />
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>

           
                    
            </form>
        </div>    
    )
}
export default Form