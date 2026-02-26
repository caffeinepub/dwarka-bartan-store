import List "mo:core/List";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  type Enquiry = {
    name : Text;
    phone : Text;
    message : Text;
    requestCallback : Bool;
    timestamp : Int;
  };

  module Enquiry {
    public func compare(enquiry1 : Enquiry, enquiry2 : Enquiry) : Order.Order {
      Text.compare(enquiry1.name, enquiry2.name);
    };
  };

  let enquiries = List.empty<Enquiry>();

  public shared ({ caller }) func submitEnquiry(name : Text, phone : Text, message : Text, requestCallback : Bool) : async () {
    let newEnquiry : Enquiry = {
      name;
      phone;
      message;
      requestCallback;
      timestamp = Time.now();
    };
    enquiries.add(newEnquiry);
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.toArray().sort();
  };
};
