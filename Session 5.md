<!-- Design -->
<!-- Session 5: Develop a modular design for RRS. -->

## MODULAR DESIGN - Modularization is the process of separating the functionality of a program into independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality.

In the Railway Reservation system, we have the following main modules:

Reservation Form: This form is used for the reservation of ticket. The main advantage of this form is that it has the easiest of the user interface. This makes it user friendly and easy to use. It has the Passenger’s name, address, contact no, source and destination station names and code.
Cancellation Form: This form consists of cancellation; the user interface is again easy. One just needs the PNR number to cancel a ticket.
Fare Records: This form is used for looking up and calculating the fare between two stations with a specific class.
Train Enquiry: Train enquiry is used for knowing available trains between two stations. We need to provide source and destination names or codes and then we will be given the train names between these two stations.
Reservation Enquiry: This form is used to know if there is any seat available in a train. Here we need to provide date, train no, source and destination stations.
Seat Details: This form is used to know about the seat later using our PNR number.

## The benefits of modular programming are:

    Efficient Program Development
        Programs can be developed more quickly with the modular approach since small subprograms are easier to understand, design, and test than large programs. With the module inputs and outputs defined, the programmer can supply the needed input and verify the correctness of the module by examining the output. The separate modules are then linked and located by the linker into an absolute executable single program module. Finally, the complete module is tested.
    
    Multiple Use of Subprograms
        Code written for one program is often useful in others. Modular programming allows these sections to be saved for future use. Because the code is relocatable, saved modules can be linked to any program that fulfills their input and output requirements. With monolithic programming, such sections of code are buried inside the program and are not so available for use by other programs.

    Ease of Debugging and Modifying
        Modular programs are generally easier to debug than monolithic programs. Because of the well-defined module interfaces of the program, problems can be isolated to specific modules. Once the faulty module has been identified, fixing the problem is considerably simpler. When a program must be modified, modular programming simplifies the job. You can link new or debugged modules to an existing program with the confidence that the rest of the program will not change.
