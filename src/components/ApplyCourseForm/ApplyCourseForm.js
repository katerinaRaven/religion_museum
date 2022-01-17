import React from 'react';
import {withStyles} from "@mui/styles";
import {Autocomplete, Box, Button, TextField, Typography} from "@mui/material";
import {getImgUrl} from "../../utils/utils";
import SectionTitle from "../SectionTitle";
import coursesData from '../../data/coursesData.json';
import classNames from "classnames";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { GoogleSpreadsheet } from "google-spreadsheet";

const styles = theme => ({
    container: {
        height: '473px',
        width: '100%',
        background: 'rgba(196, 196, 196, 0.23)',
        position: 'relative',
        overflow: 'hidden',

        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    imageLeft: {
        position: 'absolute',
        left: '0'
    },
    imageRight: {
        position: 'absolute',
        right: '0'
    },
    textField: {
        height: '35px',
        width: '386px !important',
        background: '#FFF',
        borderRadius: '20px',
        paddingRight: '8px !important'
    },
    input: {
        // height: '35px',
        // border: 'none',
        // fontSize: '12px',
        paddingLeft: '16px'
    },
    button: {
        height: '50px',
        padding: '6px 24px !important',
        borderRadius: "30px !important",
        backgroundColor: theme.palette.primary.main + '!important',
        color: '#000 !important'
    },
    dropdownIcon: {
        fontSize: '28px',
        color: '#494949',
    },
})

class ApplyCourseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            course: '',
            courseInput: '',
            name: '',
            email: ''
        }

        this.courseOptions = coursesData.courses.map(el => el.title);

        // this.document = new GoogleSpreadsheet('1Cypvrnsx_IDzd48bIHVpNtOPXfKqLossI5EJduYk4Mk');
    }

    onCourseChange = (event, value) => {
        this.setState({ course: value })
    }

    onCourseInputChange = (event, value) => {
        if (!event) { return; }
        this.setState({ courseInput: value })
    }

    onNameChange = event => {
        this.setState({ name: event.target.value })
    }

    onEmailChange = event => {
        this.setState({ email: event.target.value })
    }

    render() {
        const { classes } = this.props;
        const { course, courseInput, name, email } = this.state;
        return (
            <React.Fragment>
                <Box className={classes.container} pt={5.75}>
                    <img className={classes.imageLeft} src={getImgUrl('applyFormLeft.png')} />
                    <img className={classes.imageRight} src={getImgUrl('applyFormRight.png')} />

                    <SectionTitle>ЗАПОЛНИТЕ ФОРМУ И МЫ ОБЯЗАТЕЛЬНО СВЯЖЕМСЯ С ВАМИ</SectionTitle>

                    <Box mt={8}>
                        <Autocomplete
                            // openOnFocus={true}
                            popupIcon={<ArrowDropDownIcon className={classes.dropdownIcon} />}
                            options={this.courseOptions}
                            value={course}
                            onChange={this.onCourseChange}
                            inputValue={courseInput}
                            onInputChange={this.onCourseInputChange}

                            renderInput={(params) => {
                                let customParams = Object.assign(params);
                                customParams.InputProps.className = classNames(customParams.InputProps.className, classes.input);
                                return <TextField
                                    {...customParams}
                                    variant={'standard'}
                                    className={classes.textField}
                                    placeholder={'Выберите курс'}

                                    InputProps={{
                                        // className: classes.input,
                                        disableUnderline: true,
                                        ...customParams.InputProps
                                    }}
                                />
                            }}
                        />

                        <Box mt={2}>
                            <TextField
                                variant={'standard'}
                                className={classes.textField}
                                placeholder={'Имя'}

                                value={name}
                                onChange={this.onNameChange}

                                InputProps={{
                                    className: classes.input,
                                    disableUnderline: true
                                }}
                            />
                        </Box>

                        <Box mt={2}>
                            <TextField
                                variant={'standard'}
                                className={classes.textField}
                                placeholder={'Почта'}

                                value={email}
                                onChange={this.onEmailChange}

                                InputProps={{
                                    className: classes.input,
                                    disableUnderline: true
                                }}
                            />
                        </Box>
                    </Box>

                    <Box mt={3}>
                        <Button className={classes.button}>
                            <Typography variant={'button'}>
                                Записаться на курс
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ApplyCourseForm);