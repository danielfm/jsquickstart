Welcome To JsQuickStart
=======================

JsQuickStart provides a working JavaScript project that helps you get up and
running as quickly as possible. It includes everything needed to create
well-organized and automated JavaScript projects.

This is an open source project licenced under the terms of The
`BSD License`_ and sponsored by `Destaquenet Technology Solutions`_, a
brazilian software development and consultancy startup.


:Author: Daniel Fernandes Martins <daniel@destaquenet.com>
:Company: `Destaquenet Technology Solutions`_


Features
--------

* `Ant`_-based build script customizable via properties and/or hook targets
  (``-pre-xxxx`` and ``-post-xxxx`` for most build targets);
* Standard directory layout that keeps your code organized;
* Configurable bundle generation;
* Minification/compression with `YUICompressor`_;
* Automatic API documentation generation with `JsDoc-Toolkit`_;
* Unit testing and continuous integration support with `JsTestDriver`_ and
  `JsHamcrest`_;
* Code quality inspection with `JsLint4Java`_;
* Cross-platform and free to use both in personal and commercial projects;


Getting Started
---------------

After download and extract the JsQuickStart archive, you end up with a sample,
pre-configured JavaScript project.


Build Targets
`````````````

If you have already installed the `required`_ dependencies, run the following
command line to display all available build targets::

    $ ant -p

The following command line runs the default target, which builds the bundle::

    $ ant

You can also run one or more targets in a given order::

    $ ant clean min doc-api

Unit Testing And Linting
````````````````````````

To be able to run the unit tests, first you need to start up `JsTestDriver`_ in
server mode. Run on a separate console window::

    $ ant test-server

Then, you need to capture one or more browser instances in which to run the
tests::

    $ ant test-capture

By default, the previous command will start up `Firefox`_ and capture it. If you
don't have `Firefox`_, just point your favorite browser to
http://localhost:4224/capture.

Now you are able to run the tests on the captured browser instances::

    $ ant test

Also, you might want to occasionally check the source code against syntax errors
and potential bugs with `JsLint4Java`_::

    $ ant lint


Continuous Integration
``````````````````````

The command line below runs the tests and outputs the test results to XML files
that can be easily consumed by a wide variety of tools, such as continuous
integration servers::

    $ ant test-ci


Description Of Contents
-----------------------

build
  Stores the build output artifacts.

config
  Configuration files for the project. These files allows you to quickly
  override most build options whithout touching the XML files.

copying
  License files for all bundled dependencies.

doc
  Place to store the project documentation.

doc/api
  This is where the generated API documentation will be stored.

lib
  Bundled libraries for this project.

lib/build
  Libraries used by the build script, separated by programming language.

lib/main
  Libraries used by the main code, separated by programming language.

lib/test
  Libraries used by the test code, separated by programming language.

priv
  Internal build scripts and configuration files. These files **are not meant
  to be changed**.

src
  Holds the project source code.

src/main
  Main source code.

src/test
  Unit and functional tests.

build.xml
  Use this file to modify or extend the build behaviour.


Dependencies
------------

.. _required:

Required
````````

1. `Java`_ Development Kit 5.0+;
2. Apache `Ant`_ 1.7+;

Bundled
```````

1. `Ant-Contrib`_ 1.0b3;
2. `JsDoc-Toolkit`_ 2.3.0;
3. `JsHamcrest`_ 0.6.1;
4. `JsLint4Java`_ 1.3.3;
5. `JsTestDriver`_ 1.2;
6. `YUICompressor`_ 2.4.2;


.. _Destaquenet Technology Solutions: http://www.destaquenet.com
.. _BSD License: http://www.opensource.org/licenses/bsd-license.php

.. _Ant: http://ant.apache.org
.. _Ant-Contrib: http://ant-contrib.sourceforge.net
.. _Java: http://java.sun.com
.. _JsDoc-Toolkit: http://code.google.com/p/jsdoc-toolkit
.. _JsHamcrest: http://jshamcrest.destaquenet.com
.. _JsLint4Java: http://code.google.com/p/jslint4java
.. _JsTestDriver: http://code.google.com/p/js-test-driver
.. _YUICompressor: http://developer.yahoo.com/yui/compressor

.. _Firefox: http://www.mozilla.com/en-US/firefox
.. _Hudson: http://hudson.dev.java.net
.. _CruiseControl: http://cruisecontrol.sourceforge.net
