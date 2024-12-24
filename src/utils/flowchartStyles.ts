export const getSymbolDimensions = (type: string) => {
  switch (type) {
    case 'decision':
      return 'w-40 h-40'; // Larger square for diamond
    default:
      return 'w-48 h-16';
  }
};

export const getSymbolClass = (type: string) => {
  switch (type) {
    case 'start':
    case 'end':
      return 'rounded-full bg-blue-100 border-blue-300';
    case 'process':
      return 'bg-green-100 border-green-300';
    case 'decision':
      return 'bg-yellow-100 border-yellow-300 rotate-45 transform-gpu';
    case 'input':
    case 'output':
      return 'transform skew-x-12 bg-purple-100 border-purple-300';
    default:
      return '';
  }
};