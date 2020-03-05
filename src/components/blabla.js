const handleTimer = () => {
        
    let intervalTimer = setInterval( () => {
      if (seconds > 0 ) {
          setSeconds(seconds - 1);
          return;
      }
  
      if (minutes === 0) {
        clearInterval(intervalTimer);
        return;
      }
  
      setMinutes(minutes - 1);
      setSeconds(59)
  
    }, 100);
  }