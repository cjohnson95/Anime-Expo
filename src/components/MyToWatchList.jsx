import MyWatchedList from './MyWatchedList';

export default function MyToWatchList({
  myWatchedList,
  completeMyWatchedList,
  editMyWatchedListText,
}) {
  return (
    <>
      <h1>Add Anime</h1>
      <input
        type='text'
        onKeyDown={(e) => {
          e.key === 'Enter' && addToMyWatchList(e)
        }}
      />
          {toWatchLists.length ? (
            <>
            <h1>My to watch Anime list</h1>
            <ul className='mytowatchlist'>
              {
                toWatchLists
                .filter((i) => !i.completeToWatch)
                .map((MyWatchedList) => {
                  return (
                    <MyWatchedList 
                      key={MyWatchedList.id}
                      MyWatchedList={MyWatchedList}
                      completeToWatch={completeToWatch}
                      edit/>
                  )
                })
              }
            </ul>
          )}
      {/* </input> */}
    </>
  );
}
