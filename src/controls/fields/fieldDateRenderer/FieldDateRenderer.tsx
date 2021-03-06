import { override } from '@microsoft/decorators';
import * as React from 'react';
import { css } from 'office-ui-fabric-react';
import { IFieldRendererProps } from '../fieldCommon/IFieldRendererProps';
import { FieldBaseTextRenderer } from '../fieldBaseTextRenderer/FieldBaseTextRenderer';
import * as appInsights from '../../../common/appInsights';

export interface IFieldDateRendererProps extends IFieldRendererProps {
    /**
     * text to be rendered
     */
    text?: string;
}

/**
 * For future
 */
export interface IFieldDateRendererState {

}

/**
 * Field Date Renderer.
 * Used for:
 *   - Date Time
 */
export class FieldDateRenderer extends React.Component<IFieldDateRendererProps, IFieldDateRendererState> {
    public constructor(props: IFieldDateRendererProps, state: IFieldDateRendererState) {
        super(props, state);

        appInsights.track('FieldDateRenderer', {});

        this.state = {};
    }

    @override
    public render(): JSX.Element {
            return (<FieldBaseTextRenderer cssProps={this.props.cssProps} className={css(this.props.className)} noTextRender={true}>{this.props.text}</FieldBaseTextRenderer>);
    }
}
