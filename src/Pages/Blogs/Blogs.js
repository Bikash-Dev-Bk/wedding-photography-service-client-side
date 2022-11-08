import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="question-answer-container pt-5 mx-30">
      <h1 className="text-2xl text-center font-medium">
        Here is some Questions and Answer for you.
      </h1>
      <div className="question-container">
        <div className="question-answer">
          <h3 className="text-2xl font-medium mb-3">
            Question-1: Difference between SQL and NoSQL
          </h3>
          <p>
            When it comes to choosing a database the biggest decisions is
            picking a relational (SQL) or non-relational (NoSQL) data structure.
            While both the databases are viable options still there are certain
            key differences between the two that users must keep in mind when
            making a decision.
            <br />
            <br />
            <strong>The Main Differences: </strong>
            <br />
            <strong>1.Type – </strong> SQL databases are primarily called as
            Relational Databases (RDBMS); whereas NoSQL database are primarily
            called as non-relational or distributed database.
            <br />
            <strong>2.Language – </strong> SQL databases defines and manipulates
            data based structured query language (SQL). Seeing from a side this
            language is extremely powerful. SQL is one of the most versatile and
            widely-used options available which makes it a safe choice
            especially for great complex queries. But from other side it can be
            restrictive. SQL requires you to use predefined schemas to determine
            the structure of your data before you work with it. Also all of your
            data must follow the same structure. This can require significant
            up-front preparation which means that a change in the structure
            would be both difficult and disruptive to your whole system. A NoSQL
            database has dynamic schema for unstructured data. Data is stored in
            many ways which means it can be document-oriented, column-oriented,
            graph-based or organized as a KeyValue store. This flexibility means
            that documents can be created without having defined structure
            first. Also each document can have its own unique structure. The
            syntax varies from database to database, and you can add fields as
            you go.
            <br />
            <strong>3.Scalability – </strong> In almost all situations SQL
            databases are vertically scalable. This means that you can increase
            the load on a single server by increasing things like RAM, CPU or
            SSD. But on the other hand NoSQL databases are horizontally
            scalable. This means that you handle more traffic by sharding, or
            adding more servers in your NoSQL database. It is similar to adding
            more floors to the same building versus adding more buildings to the
            neighborhood. Thus NoSQL can ultimately become larger and more
            powerful, making these databases the preferred choice for large or
            ever-changing data sets.
            <br />
            <strong>4.Structure – </strong> SQL databases are table-based on the
            other hand NoSQL databases are either key-value pairs,
            document-based, graph databases or wide-column stores. This makes
            relational SQL databases a better option for applications that
            require multi-row transactions such as an accounting system or for
            legacy systems that were built for a relational structure.
            <br />
          </p>
        </div>
        <div className="question-answer">
          <h3 className="text-2xl font-medium mb-3">
            Question-2: What is JWT, and how does it work?
          </h3>
          <p>
            JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims
            to share security information or authorization/authentication
            requests between a client and a server. Each JWT contains encoded
            JSON objects. JWTs are signed using a cryptographic algorithm by the
            token’s issuer to ensure that No one could alter the claims after
            the token is issued and later can be used by the receiving party to
            verify the token. <br /> <br />
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted.
            <br />
            <br />
            A JWT is a string made up of three parts, separated by dots (.), and
            serialized using base64. In the most common serialization format,
            compact serialization, the JWT looks something like this:
            xxxxx.yyyyy.zzzzz. <br />
            <br />
            Once decoded, you will get two JSON strings: <br />
            1. The header and the payload. <br />
            2. The signature. <br /> <br />
            The JOSE (JSON Object Signing and Encryption) header contains the
            type of token — JWT in this case — and the signing algorithm. <br />
            <br />
            The payload contains the claims. This is displayed as a JSON string,
            usually containing no more than a dozen fields to keep the JWT
            compact. This information is typically used by the server to verify
            that the user has permission to perform the action they are
            requesting. <br />
            <br />
            There are no mandatory claims for a JWT, but overlaying standards
            may make claims mandatory. For example, when using JWT as bearer
            access token under OAuth2.0, iss, sub, aud, and exp must be present.
            some are more common than others. <br />
            <br />
            The signature ensures that the token hasn’t been altered. The party
            that creates the JWT signs the header and payload with a secret that
            is known to both the issuer and receiver, or with a private key
            known only to the sender. When the token is used, the receiving
            party verifies that the header and payload match the signature.
          </p>
        </div>
        <div className="question-answer">
          <h3 className="text-2xl font-medium mb-3">
            Question-3: What is the difference between javascript and NodeJS?
          </h3>
          <p>
            1. JavaScript is a client-side scripting language that is
            lightweight, cross-platform, and interpreted. Both Java and HTML
            include it. Node.js, on the other hand, is a V8-based server-side
            programming language. As a result, it is used to create
            network-centric applications. It's a networked system made for
            data-intensive real-time applications. If we compare node js vs.
            python, it is clear that node js will always be the preferred
            option.
            <br />
            <br />
            2. JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node.js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language. It requires libraries that can be
            conveniently accessed from JavaScript programming to be more
            helpful. <br />
            <br />
            3. Any engine may run JavaScript. As a result, writing JavaScript is
            incredibly easy, and any working environment is similar to a
            complete browser. Node.js, on the other hand, only enables the V8
            engine. Written JavaScript code, on the other hand, can run in any
            context, regardless of whether the V8 engine is supported.
            <br />
            <br />
            4. A specific non-blocking operation is required to access any
            operating system. There are a few essential objects in JavaScript,
            but they are entirely OS-specific. Node.js, on the other hand, can
            now operate non-blocking software tasks out of any JavaScript
            programming. It contains no OS-specific constants. Node.js
            establishes a strong relationship with the system files, allowing
            companies to read and write to the hard drive.
            <br />
            <br />
            5. The critical benefits of JavaScript include a wide choice of
            interfaces and interactions and just the proper amount of server
            contact and direct visitor input. Node.js, on the other hand, offers
            node package management with over 500 modules and the capacity to
            handle many requests at the same time. It also offers the unique
            ability to enable microservice architecture and the Internet of
            Things. Even when comparing node js vs. react js, node js always
            wins.
          </p>
        </div>
        <div className="question-answer">
          <h3 className="text-2xl font-medium mb-3">
            Question-4: How does NodeJS handle multiple requests at the same
            time?
          </h3>
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
