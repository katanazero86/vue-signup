import { onMounted, onUnmounted } from 'vue';

export const useConfirmLeave = () => {
  let isF5Pressed = false;

  const handleLeave = (e: Event) => {
    if (isF5Pressed) {
      e.preventDefault();
      e.returnValue = false;
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'F5') {
      isF5Pressed = true;
    }
  };

  const handleKeyup = (e: KeyboardEvent) => {
    if (e.key === 'F5') {
      isF5Pressed = false;
    }
  };

  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyup);
    window.addEventListener('beforeunload', handleLeave);
  });

  onUnmounted(() => {
    window.removeEventListener('beforeunload', handleLeave);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyup);
  });
};
