import styled from "styled-components";

import Button from "../../styles/Button/Button";

const FormContainer = styled.form`
    outline:none;
    border:0;
`

const InputMail = styled.input`
    background: ${({ theme }) => theme.colors.input_black};
    border:0;
    outline:none;
    width:100%;
    border-radius: 11px;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6em;
    line-height: 1.02em;
    padding:19px 175px 19px 20px;
    color: ${({ theme }) => theme.colors.font_input_black};
    @media${({ theme }) => theme.media.large} {
        font-size:14px;
    }
    @media${({ theme }) => theme.media.small} {
        padding-right:20px;
    }
`

const FieldsetBox = styled.fieldset`
    position:relative;
    outline:none;
    border:0;
    box-shadow:none;
`

const SubscrButton = styled(Button)`
    width:147px;
    line-height:51px;
    font-size: 1.6em;
    margin-top:0;
    position:absolute;
    top:3px;
    right:4px;
    border-radius:8px;
    @media${({ theme }) => theme.media.extraLarge} {
        line-height:45px;
        top:4px;
    }
    @media${({ theme }) => theme.media.large} {
        font-size:14px;
        line-height:46px;
        
    }
    @media${({ theme }) => theme.media.small} {
        position:relative;
        top:auto;
        right: auto;
        margin-top:10px;
    }
`

const SubscrLabel = styled.label`
    font-style: normal;
    font-weight: 700;
    font-size: 1.6em;
    line-height: 1.02em;
    color: ${({theme}) => theme.colors.footer_head};
    display:block;
    margin-bottom:20px;
    @media${({ theme }) => theme.media.large} {
        font-size:14px;
    }
`

const FormSubscribe = () => {
    return(

        <FormContainer>
            <FieldsetBox>
                <SubscrLabel>Subscribe to our mailing list to receive exclusive offers and the latest product updates</SubscrLabel>
            </FieldsetBox>
            <FieldsetBox>
                <InputMail placeholder="Your E-mail" type="email" />
                <SubscrButton type="submit">Subscribe</SubscrButton>
            </FieldsetBox>
        </FormContainer>
    );
}

export default FormSubscribe;