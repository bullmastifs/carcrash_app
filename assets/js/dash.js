function truncate(input) {
   if (input.length > 5) {
      return input.substring(0, 5) + '...';
   }
   return input;
};