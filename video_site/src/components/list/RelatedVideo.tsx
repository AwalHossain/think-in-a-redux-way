import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchRelatedVideo } from '../../features/relatedVideo/relatedVideoSlice';
import Loading from '../ui/Loading';
import RelatedItemVideo from './RelatedItemList';

export interface TagsProps {
  tags: string[],
  currentVideoId: string
}

interface Video {

  id: string,
  title: string,
  description: string,
  thumbnail: string,
  author: string,
  avatar: string,
  views: number,
  link: string,
  likes: number,
  unlikes: number,
  tags: string[],
  duration: string,
  date: string
}


export default function RelatedVideo({ currentVideoId, tags }: TagsProps) {
  const dispatch = useAppDispatch();
  const { status, error, isError, relatedVideo } = useAppSelector(state => state.relatedVideos);

  useEffect(() => {
    dispatch(fetchRelatedVideo({ currentVideoId, tags }))
  }, [dispatch, currentVideoId, tags])

  let content;

  if (status === "loading") {
    content = <Loading />
  }
  if (status === "idle" && relatedVideo.length === 0) {
    content = <div className="col-span-12">No videos found</div>
  }

  if (!isError && status === "idle" && relatedVideo.length > 0) {
    content = relatedVideo.map((video: Video) => <RelatedItemVideo key={video?.id} video={video} />)
  }

  if (isError && status === "idle") {
    content = <div className="col-span-12">{error}</div>
  }

  return (
    <div
      className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
    >
      {content}

    </div>
  )
}
