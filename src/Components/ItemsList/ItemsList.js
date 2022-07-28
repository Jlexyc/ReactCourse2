import { useEffect, useContext, useState, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { ItemComponent } from "../ItemComponent/ItemComponent";
import TextField from '@mui/material/TextField';
import { selectItemsError, selectTotalReport } from "../../Store/Items/selectors";
import { fetchItems } from "../../Store/Items/thunks";
import { ThemeContext } from '../../App';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import './ItemsList.css'

const generalStyles = {
  light: {
    container: {
      backgroundColor: '#FAFAFA',
    },
    progress: {
      display: 'flex',
      margin: 20,
    },
    text: {
      color: 'black',
    }
  },
  dark: {
    container: {
      backgroundColor: '#131313',
    },
    progress: {
      display: 'flex',
      margin: 20,
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

  const theme = useContext(ThemeContext);
  const styles = generalStyles[theme];
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
      <table style={styles.container}>
        <tbody>
          <tr>
            <td>Date</td>
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



