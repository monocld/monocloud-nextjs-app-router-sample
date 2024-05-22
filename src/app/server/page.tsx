import { getSession } from "@monocloud/nextjs-auth";

export default async function ServerComponent() {
  const session = await getSession();

  if (!session?.user) return <div>Please Sign In...</div>;

  return (
    <div className='mt-5 ml-5'>
      <p>Hi {session.user.email} from the Server</p>
      <h1>Session:</h1>
      <div className='pl-2 flex flex-col gap-2'>
        <textarea
          className='text-black w-3/5 p-2 rounded-md text-sm'
          cols={30}
          rows={10}
          value={JSON.stringify(session, undefined, 2)}
          readOnly={true}
        />
      </div>
    </div>
  );
}
