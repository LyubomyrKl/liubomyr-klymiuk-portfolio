


// Get the current date and time
const currentDate = new Date();

// Get the local time components
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

// Format the time
const formattedHours = hours % 12 || 12; // Convert hours to 12-hour format
const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero if minutes are less than 10
const ampm = hours < 12 ? 'am' : 'pm'; // Determine AM or PM

// Get the month name
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const month = monthNames[currentDate.getMonth()];

// Get the day of the month
const day = currentDate.getDate();

const Timer = () => {
    return (
        <div className='flex items-center self-start'>
            <span className='text-[50px] mr-3'>{formattedHours}<span className='animate-timer-blink'>:</span>{formattedMinutes}</span>
            <div className='flex flex-col text-lg'>
                <span className='font-bold'>{ampm}</span>
                <span className='text-xl -mt-1 text-app-text-gray'>{month} {day}</span>
            </div>
        </div>
    );
};

export default Timer;