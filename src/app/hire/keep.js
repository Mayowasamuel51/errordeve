async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/portfoillo`);
    const data = await res.json();
    if (!res.ok) {
      return {
        props: {
          error: true,
        },
      };
    }
    return {
      props: {
        portsee: data.data,
      },
    };
  }