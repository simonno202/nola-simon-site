interface PinterestPinProps {
  id: string;
  height?: number;
  width?: number;
}

export function PinterestPin({ id, height = 775, width = 450 }: PinterestPinProps) {
  return (
    <div className="my-6">
      <iframe
        src={`https://assets.pinterest.com/ext/embed.html?id=${id}`}
        height={height}
        width={width}
        frameBorder="0"
        scrolling="no"
        title="Pinterest pin embed"
      />
    </div>
  );
}
