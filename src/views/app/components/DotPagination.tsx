import { map } from 'lodash';

function DotPagination({ contents, currentIdx }: { contents: any; currentIdx: number }) {
  return (
    <div className="absolute bottom-[10%] left-[50%] -translate-x-[50%] flex gap-[1rem]">
      {map(contents, (block, index) => {
        const isActive = Number(index) === currentIdx;
        const dotColorConfig = block.topic.config.dotColor;
        const dotColor = !isActive ? 'bg-grey' : dotColorConfig;
        return <div key={index} className={`w-[1rem] h-[1rem] ${dotColor} rounded-full`} />;
      })}
    </div>
  );
}

export default DotPagination;
