<template>
  <div class="flex flex-col h-screen w-full">
    <div class="flex">
      <input
        type="text"
        class="border-r border-neutral-300 text-sm px-0.5 w-[100px] focus:outline-none"
      />
      <input type="text" class="flex-1 text-sm px-0.5 focus:outline-none" />
    </div>
    <SpreadsheetContainer class="flex-1" />
  </div>
</template>
