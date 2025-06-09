export default function compare_time(time_string1,time_string2)
{
    let datetime1 = new Date(time_string1);
    let datetime2 = new Date(time_string2);
    return datetime1.getTime()> datetime2.getTime();
}