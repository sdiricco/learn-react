export default function Profile({name,imageUrl,imageSize}: {name: string, imageUrl: string, imageSize: number}) {
  return (
    <>
      <h1>{name}</h1>
      <img
        className="avatar"
        src={imageUrl}
        alt={"Photo of " + name}
        style={{
          width: imageSize,
          height: imageSize,
        }}
      />
    </>
  );
}
