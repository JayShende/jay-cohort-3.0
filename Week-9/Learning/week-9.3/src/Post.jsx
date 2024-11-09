const style = { backgroundColor: "white", borderRadius: 20, width: "500px"};

export function Post({name,subtitle,time,decription}) {
  return (
    <div style={style}>
      <div className="topele" style={{ display: "flex",}}>
        <img
          src="https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
          alt=""
          height={50} style={{paddingLeft:"20px",paddingTop:"5px"}}
        />
       <div style={{paddingLeft:10}}>
        <b>{name}</b>
        <div>{subtitle} Folllowers</div>
        <div>{time} Ago</div>
       </div>
      </div>

      <div style={{padding:"20px"}}> {decription}.</div>
    </div>
  );
}
