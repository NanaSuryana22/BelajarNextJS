const Custom404 = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#b19292",
          flexDirection: "column",
        }}
      >
        <img
          src="/not-found.svg"
          alt="404"
          style={{
            width: "200px",
            height: "auto",
            alignSelf: "center",
            marginRight: "1rem",
          }}
        />
        <br />
        <div
          style={{
            fontSize: "2rem",
            marginLeft: "1rem",
            alignItems: "center",
            color: "#2847d1",
          }}
        >
          Halaman tidak ditemukan
        </div>
      </div>
    </div>
  );
};

export default Custom404;
