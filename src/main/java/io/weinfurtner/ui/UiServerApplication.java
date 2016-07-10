package io.weinfurtner.ui;

import io.weinfurtner.ui.channel.ContactChannel;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.stream.annotation.EnableBinding;

@SpringBootApplication
@EnableDiscoveryClient
@EnableBinding(value = {ContactChannel.class})
public class UiServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(UiServerApplication.class, args);
	}
}

