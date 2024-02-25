    import React, { useState } from 'react';
    import { FirstPage, FlowFinalAntecipacao13, FourthPageByAntecipacao, SecondPage, ThirdPage } from './Pages';
    import { Grid, Typography } from '@mui/material';
    import { RenderIf } from '../../../Utils';
    import { DefaultButton } from '../../UI/Buttons';

    function Questionnaire({ response, page, handlePageChange, titlePage, isContinueButtonEnabled, dispatch, state, handleBack }) {
    // Defina um objeto com os títulos baseados no creditOption
    const titlesByCreditOption = {
        'Antecipação 13': {
        1: 'Antecipação do 13º salário é a possibilidade de receber adiantado uma parte ou o valor integral do décimo terceiro salário antes do período tradicional de pagamento no final do ano.',
        2: 'Informe seu rendimento mensal',
        3: 'Parabéns!\nSua solicitação de antecipação foi aprovada.\nVocê tem um valor disponível de crédito para utilizar.\nAproveite!',
        4: 'Solicitação de crédito concluída.',
        },
        'Crédito Parcelado': {
        1: 'Crédito parcelado é uma opção de empréstimo em que o valor total é dividido em parcelas mensais, com juros, e pode ser contratado por pessoas conveniadas ou não a órgãos específicos.',
        2: 'Título da Segunda Página para Crédito Parcelado',
        3: 'Título da Terceira Página para Crédito Parcelado',
        },
    };

    // Obtenha o título com base no creditOption e na página atual
    const currentTitle = titlesByCreditOption[state.creditOption]?.[page] || 'Qual solicitação deseja realizar?';

    return (
        <>
        <Grid container spacing={2} direction="column" justifyContent="space-between" alignItems="center" style={{ height: '100%', margin: 0, padding: 0 }}>
            <Grid item>
            <Typography style={{ whiteSpace: 'pre-line', color: "#005CA9", fontSize: 18, fontWeight: 800, textAlign: "center" }}>{response === null ?  "Estamos buscando as melhores opções\n de crédito para você." : currentTitle}</Typography>

            {/* <Typography>{currentTitle}</Typography> */}
            </Grid>
            <Grid style={{ marginBottom: 40, marginTop: 40 }} item>
            <RenderIf predicate={page === 1}>
                <FirstPage state={state} dispatch={dispatch} />
            </RenderIf>
            {/* FLOW ANTECIPACAO 13 */}
            <RenderIf predicate={state.creditOption === 'Antecipação 13'}>
                <RenderIf predicate={page === 2}>
                <ThirdPage dispatch={dispatch} state={state} />
                </RenderIf>
                <RenderIf predicate={page === 3}>
                <FourthPageByAntecipacao response={response} />
                </RenderIf>
                <RenderIf predicate={page === 4}>
                <FlowFinalAntecipacao13 />
                </RenderIf>
            </RenderIf>
            {/* FLOW PARCELADO */}
            <RenderIf predicate={state.creditOption === 'Crédito Parcelado'}>
                <RenderIf predicate={page === 2}>
                <SecondPage state={state} creditOption={state.creditOption} dispatch={dispatch} />
                </RenderIf>
                <RenderIf predicate={page === 3}>
                <ThirdPage dispatch={dispatch} state={state} />
                </RenderIf>
            </RenderIf>
            </Grid>
            <Grid container justifyContent={'center'} spacing={2} direction={'column'}>
            <Grid style={{ display: 'flex', justifyContent: 'center' }} item>
                <DefaultButton state={state} handlePageChange={handlePageChange} isContinueButtonEnabled={isContinueButtonEnabled[page](state)} buttonTitle={page === 4 ? "Concluir" : page === 3 && state.creditOption === "Antecipação 13" ? "Contratar" : 'Continuar' } />
            </Grid>
            <RenderIf predicate={page > 1 && page < 4}>
                <Grid style={{ display: 'flex', justifyContent: 'center' }} item>
                <DefaultButton styleContrast={true} handlePageChange={handleBack} buttonTitle={'Voltar'} isContinueButtonEnabled={true} />
                </Grid>
            </RenderIf>
            </Grid>
        </Grid>
        </>
    );
    }

    export default Questionnaire;
