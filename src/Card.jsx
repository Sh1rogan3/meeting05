function Card() {
    return (
      <>
        <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-red-700 to-purple-600">
          <div class="w-1/2 bg-white rounded-lg shadow-2xl p-8 m-4">
            <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
              Registrasi E-KTP
            </h1>
            <form action="/" method="post">
              <div class="flex flex-col mb-4">
                <label
                  class="mb-2 font-bold text-lg text-gray-900"
                  for="nama"
                >
                  Nama
                </label>
                <input
                  class="border py-2 px-3 text-grey-800"
                  type="text"
                  name="nama"
                  id="nama"
                />
              </div>
              <div class="flex flex-col mb-4">
                <label
                  class="mb-2 font-bold text-lg text-gray-900"
                  for="nama"
                >
                  NIK
                </label>
                <input
                  class="border py-2 px-3 text-grey-800"
                  type="text"
                  name="nama"
                  id="nama"
                />
              </div>
              <div class="flex flex-col mb-4">
                <label
                  class="mb-2 font-bold text-lg text-gray-900"
                  for="nama"
                >
                  Alamat
                </label>
                <input
                  class="border py-2 px-3 text-grey-800"
                  type="text"
                  name="nama"
                  id="nama"
                />
              </div>
              <div class="flex flex-col mb-4">
                <label
                  class="mb-2 font-bold text-lg text-gray-900"
                  for="nama"
                >
                  Jenis Kelamin
                </label>
                <input
                  class="border py-2 px-3 text-grey-800"
                  type="text"
                  name="nama"
                  id="nama"
                />
              </div>
              <div class="flex flex-col mb-4">
                <label
                  class="mb-2 font-bold text-lg text-gray-900"
                  for="nama"
                >
                  Nama Waifu
                </label>
                <input
                  class="border py-2 px-3 text-grey-800"
                  type="text"
                  name="nama"
                  id="nama"
                />
              </div>
              <img class=" rounded w-60 h-50" src="yor08.png"/>
            </form>
            <a
              class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900"
              href="/"
            >
              Telah memiliki akun? Silahkan login disini!
            </a>
          </div>
        </div>
      </>
    );
  }
  
  export default Card;