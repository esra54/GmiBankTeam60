package gmiBank.utilities;

import gmiBank.pojos.Registration;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

public class ReadText {
    public static List<String> returnCustomerUserIdText(String filePath){
        List<String> all = new ArrayList<>();
        try(BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
            System.out.println(line);
            int i = 0;
            while (line != null) {
                Registration registration = new Registration();
                registration.setId(Integer.parseInt(line.split(",")[0]));
                sb.append(System.lineSeparator());
                line = br.readLine();
                System.out.println(i++);
                all.add(String.valueOf(registration.getId()));
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return all;
    }
}
