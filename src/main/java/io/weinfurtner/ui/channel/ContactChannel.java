package io.weinfurtner.ui.channel;

import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;

/**
 * Created by Jared on 7/10/2016.
 */
public interface ContactChannel {

    @Output
    MessageChannel contact();
}
