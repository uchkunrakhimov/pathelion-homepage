<template>
  <div class="mt-4">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        Contact Us
      </h1>
      <p class="lg:w-2/3 text-white mx-auto leading-relaxed text-base">
        Send me a question
      </p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <form class="flex flex-wrap -m-2" action="">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              v-model="name"
              name="name"
              class="
                w-full
                bg-hh
                rounded
                border border-gray-300
                text-base
                outline-none
                text-white
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-white">
              Email
            </label>
            <input
              v-model="email"
              type="email"
              id="email"
              name="email"
              class="
                w-full
                bg-hh
                rounded
                border border-gray-300
                text-base
                outline-none
                text-white
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-white">
              Message
            </label>
            <textarea
              v-model="massage"
              id="message"
              name="message"
              class="
                w-full
                bg-hh
                rounded
                border border-gray-300
                h-32
                text-base
                outline-none
                text-white
                py-1
                px-3
                resize-none
                leading-6
                transition-colors
                duration-200
                ease-in-out
              "
            ></textarea>
          </div>
        </div>
        <div class="p-2 w-full text-center">
          <button
            type="submit"
            class="
              inline-flex
              items-center
              py-2
              px-3
              text-xl
              font-medium
              text-center text-white
              bg-sky-900
              rounded-lg
              duration-300
              hover:bg-cyan-800
              focus:ring-4 focus:outline-none focus:bg-cyan-800
              dark:bg-cyan-800 dark:hover:bg-cyan-800 dark:focus:bg-cyan-800
            "
          >
            Send
            <svg
              class="ml-2 mt-1"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              id="magicoon-Regular"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="send-Regular">
                <path
                  fill="#fff"
                  id="send-Regular-2"
                  data-name="send-Regular"
                  class="cls-1"
                  d="M20.927,3.073a2.782,2.782,0,0,0-2.663-.738L5.151,5.614A3.83,3.83,0,0,0,5.2,13.058l4.646,1.093L10.942,18.8a3.773,3.773,0,0,0,3.7,2.953h.028a3.773,3.773,0,0,0,3.714-2.9L21.665,5.735A2.781,2.781,0,0,0,20.927,3.073Zm-.718,2.3L16.931,18.484a2.3,2.3,0,0,1-2.277,1.766,2.274,2.274,0,0,1-2.252-1.8l-1.1-4.69L15.53,9.53a.75.75,0,0,0-1.06-1.06L10.237,12.7l-4.69-1.1a2.33,2.33,0,0,1-.031-4.529L18.628,3.791a1.313,1.313,0,0,1,.321-.04,1.3,1.3,0,0,1,1.26,1.621Z"
                />
              </g>
            </svg>
          </button>
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-slate-400">uchkunrakhimov@gmail.com</a>
          <p class="leading-normal text-slate-400 my-5">
            Uzbekistan
            <br />
            Tashkent, Asalobod street
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      name: "",
      email: "",
      massage: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_52jz2vb",
          "template_th53onj",
          e.target,
          "s9hdWPiqbxpcPEF9q",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      this.name = "";
      this.email = "";
      this.message = "";
      e.preventDefault();
    },
  },
};
</script>

<style>
</style>