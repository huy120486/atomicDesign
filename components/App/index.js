import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import { contentSelector } from './state';
import logo from './logo.svg';
import './App.css';

// import DropDownMenu from '../DropDownMenu';
// import Modal from '../Modal';
import Badge from '../Badge';
import BasicModal from '../BasicModal';
import BasicTable from '../BasicTable';
import Breadcrumb from '../Breadcrumb';
import ButtonGroup from '../ButtonGroup';
import ButtonsGroup from '../ButtonsGroup';
import CheckboxGroup from '../CheckboxGroup';
import Collapse from '../Collapse';
import DataBoard from '../DataBoard';
import DateField from '../DateField';
import DatePicker from '../DatePicker';
import DayPicker from '../DayPicker';
import Dropdown from '../Dropdown';
import DropDownSelect from '../DropDownSelect';
import EhCheckbox from '../EhCheckbox';
import ErrorLabel from '../ErrorLabel';
import FieldWithError from '../fieldWithError';
import FileUpload from '../FileUpload';
import FlatButton from '../FlatButton';
import FloatButton from '../FloatButton';
import Icon from '../Icon';
import Label from '../Label';
import LinkButton from '../LinkButton';
import MiniStat from '../MiniStat';
import NestedList from '../NestedList';
import PageLayout from '../PageLayout';
import Paginator from '../Paginator';
import Panel from '../Panel';
import Portlet from '../Portlet';
import ProgressBar from '../ProgressBar';
import RadioGroup from '../RadioGroup';
import ReportBoard from '../ReportBoard';
import ReduxForm from '../ReduxForm';
import ScrollBar from '../ScrollBar';
import SearchField from '../SearchField';
import SelectField from '../SelectField';
import Spinner from '../Spinner';
import StepIndicator from '../StepIndicator';
import Stepper from '../Stepper';
import Table from '../Table';
import Tabs from '../Tabs';
import TagInput from '../TagInput';
import TextField from '../TextField';
import Toggle from '../Toggle';
import WidgetPanel from '../WidgetPanel';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React velonic</h2>
    </div>
    <div
      style={{
        textAlign: 'left',
        padding: 20,
      }}
    >
      <h2>
        <Link to="/ReportBoard">ReportBoard</Link>
      </h2>
      <ReportBoard />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/ReportBoard.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/DataBoard">DataBoard</Link>
      </h2>
      <DataBoard />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/DataBoard.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/ReduxForm">ReduxForm</Link>
      </h2>
      <ReduxForm />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/ReduxForm.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/BasicModal">BasicModal</Link>
      </h2>
      <BasicModal />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/BasicModal.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/WidgetPanel">WidgetPanel</Link>
      </h2>
      <WidgetPanel />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/WidgetPanel.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>MediaQuery</h2>
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/MediaQuery.html"
          target="_blank"
        >
          {' '}
          Learn how to use{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/LinkButton">LinkButton</Link>
      </h2>
      <LinkButton />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/LinkButton.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/BasicTable">BasicTable</Link>
      </h2>
      <BasicTable />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/BasicTable.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/Spinner">Spinner</Link>
      </h2>
      <Spinner />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/Spinner.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/Panel">Panel</Link>
      </h2>
      <Panel />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/Panel.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/Portlet">Portlet</Link>
      </h2>
      <Portlet />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/Portlet.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/SelectField">SelectField</Link>
      </h2>
      <SelectField />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/SelectField.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/PageLayout">PageLayout</Link>
      </h2>
      <PageLayout />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/PageLayout.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/Paginator">Paginator</Link>
      </h2>
      <Paginator />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/Paginator.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/Icon">Icon</Link>
      </h2>
      <Icon />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/Icon.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/Dropdown">Dropdown</Link>
      </h2>
      <Dropdown />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/Dropdown.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/DropDownSelect">DropDown Select</Link>
      </h2>
      <DropDownSelect />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/DropDownSelect.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/FlatButton">FlatButton</Link>
      </h2>
      <FlatButton />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/FlatButton.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/FloatButton">FloatButton</Link>
      </h2>
      <p> Take a look at bottom right</p>
      <FloatButton />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/FloatButton.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/DayPicker">DayPicker</Link>
      </h2>
      <DayPicker />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/DayPicker.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/TextField">TextField</Link>
      </h2>
      <TextField />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/TextField.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/SearchField">SearchField</Link>
      </h2>
      <SearchField />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/SearchField.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/Badge">Badge</Link>
      </h2>
      <Badge />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/Badge.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/ButtonGroup">Button Group</Link>
      </h2>
      <ButtonGroup />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/ButtonGroup.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/ButtonsGroup">Buttons Group</Link>
      </h2>
      <ButtonsGroup />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/ButtonsGroup.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/DateField">DateField</Link>
      </h2>
      <DateField />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/DateField.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/CheckboxGroup">CheckboxGroup</Link>
      </h2>
      <CheckboxGroup />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/CheckboxGroup.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/DatePicker">DatePicker</Link>
      </h2>
      <DatePicker />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/DatePicker.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/ehCheckbox">ehCheckbox</Link>
      </h2>
      <EhCheckbox />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/EhCheckbox.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/Label">Label</Link>
      </h2>
      <Label />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/Label.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/MiniStat">MiniStat</Link>
      </h2>
      <MiniStat />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/MiniStat.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/RadioGroup">RadioGroup</Link>
      </h2>
      <RadioGroup />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/RadioGroup.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/Toggle">Toggle</Link>
      </h2>
      <Toggle />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/Toggle.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/ProgressBar">ProgressBar</Link>
      </h2>
      <ProgressBar />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/ProgressBar.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/NestedList">NestedList</Link>
      </h2>
      <NestedList />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/NestedList.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/Stepper">Stepper</Link>
      </h2>
      <Stepper />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/Stepper.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/Tabs">Tabs</Link>
      </h2>
      <Tabs />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/Tabs.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/fieldWithError">fieldWithError</Link>
      </h2>
      <FieldWithError />

      <h2>
        <Link to="/StepIndicator">StepIndicator</Link>
      </h2>
      <StepIndicator />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/StepIndicator.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>

      <h2>
        <Link to="/Collapse">Collapse</Link>
      </h2>
      <Collapse />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/Collapse.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>

      <h2>
        <Link to="/Breadcrumb">Breadcrumb</Link>
      </h2>
      <Breadcrumb />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/Breadcrumb.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>
      <hr />

      <h2>
        <Link to="/ScrollBar">ScrollBar</Link>
      </h2>
      <ScrollBar />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/ScrollBar.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>

      <h2>
        <Link to="/TagInput">TagInput</Link>
      </h2>
      <TagInput />
      <div>
        <a
          href="https://thinkei.github.io/react-velonic/TagInput.html"
          target="_blank"
        >
          {' '}
          View doc{' '}
        </a>
      </div>

      <h2>
        <Link to="/ErrorLabel">ErrorLabel</Link>
      </h2>
      <ErrorLabel />
      <h2>
        <Link to="/DropDownMenu">DropDownMenu</Link>
      </h2>
      <p> Tap title to see </p>
      <h2>
        <Link to="/FileUpload">FileUpload</Link>
      </h2>
      <FileUpload />
      <h2>
        <Link to="/Table">Table</Link>
      </h2>
      <Table />
      <h2>
        <Link to="/Modal">Modal</Link>
      </h2>
      <p> Tap title to see </p>
    </div>
    <hr />
  </div>
);

const mapStateToProps = state => ({
  content: contentSelector(state),
});

const enhance = compose(connect(mapStateToProps));

export default enhance(App);
