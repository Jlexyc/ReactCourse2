import { useEffect, useMemo, useState, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { selectItemsError, selectTotalReport } from "../../Store/Items/selectors";
import { fetchItems } from "../../Store/Items/thunks";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import './ItemsList.css'

const generalStyles = {
  main: {
    container: {
      backgroundColor: '#FAFAFA',
    },
    progress: {
      display: 'flex',
      margin: 20,
    },
    text: {
      color: 'black',
      fontSize: '40px',
      backgroundColor: 'red',
    }
  },
  dark: {
    container: {
      backgroundColor: '#131313',
    },
    text: {
      color: 'white',
    }
  }
};

export const ItemsList = () => {
  const itemsError = useSelector(selectItemsError);
  // validate sort param
  const totalReport = useSelector(selectTotalReport);
  const navigate = useNavigate();
  const { filterDate } = useParams();
  const dayjsParsedDate = dayjs(filterDate, "DD-MM-YYYY")
  const selectedDate = dayjsParsedDate.isValid() ? dayjsParsedDate.toDate() : new Date();

  const [date, setDate] = useState(selectedDate);
  console.log('date: ', date);

  const dispatch = useDispatch();

  const theme = useTheme();
  const textStyles = useMemo(() => { 
    return { ...generalStyles.main.text, ...(theme.palette.mode === 'dark' ? generalStyles.dark.text : {})}}, 
    [theme],
  );

  const contaierStyles = useMemo(() => { 
    return { ...generalStyles.main.container, ...(theme.palette.mode === 'dark' ? generalStyles.dark.container : {})}}, 
    [theme],
  );

  console.log('theme: ', theme);

  useEffect(() => {
    dispatch(fetchItems(dayjs(date).format('YYYY-MM-DD')));
  }, [dispatch, date])

  const handleChange = useCallback((newValue) => {
    setDate(newValue);
    navigate('/' + dayjs(newValue).format('DD-MM-YYYY'))
  }, [navigate]);

  if (itemsError) {
    return (
      <div>{itemsError}</div>
    )
  }

  if (!totalReport) {
    return (<div></div>)
  }

  return (
    <div>
      <div className='calendarContainer'>
        <DesktopDatePicker
          label="Date"
          value={date}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
      <table style={contaierStyles}>
        <tbody>
          <tr>
            <td style={textStyles}>{getString()}</td>
            <td>Active Cases</td>
            <td>Confirmed Cases</td>
            <td>Death Cases</td>
            <td>Fatality Rate</td>
            <td>Recovered</td>
          </tr>
          <tr>
            <td>{totalReport.date}</td>
            <td>{totalReport.active}</td>
            <td>{totalReport.confirmed}</td>
            <td>{totalReport.deaths}</td>
            <td>{totalReport.fatality_rate}</td>
            <td>{totalReport.recovered}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}



