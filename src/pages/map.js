import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartImageContainer from "../components/ChartImageContainer";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";
import { Matplotlib, Seaborn } from "../components/MiscellaneousLogos"
import { Col } from "react-bootstrap";
import CodeChunk from "../components/CodeChunk"
import ChartImage from "../components/ChartImage";
import Spacing from "../components/Spacing";

const chartDescription =
  "<p>The first step of any geo-spatial data analysis is to draw the background map of the area of interest. This section explains what are the main ways to build it with <code>Python</code>. It is the foundation of the next sections that will add some data on top of it.</p>";

export default function BackgroundMap() {

  return (

    <Layout title="Background Map" isTocEnabled>

      <TitleAndDescription
        title="Background Map"
        description={chartDescription}
      />

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <h2 id="Overview">🔎  Input format and package overview ⭐ </h2>
          <p>
            A map is basically a set of polygons displayed on a 2 dimensional canvas. There
            are two problems you need to solve when building one:
        </p>
          <ul>
            <li>
              <u>Where to find polygon coordinates</u>. It can come from:
              <ul>
                <li>a <b>shape file</b> or a <b>geoJson file</b>. That's 2 different ways to store the information. The <code>geopandas</code> package is the best way to read those file formats with Python.</li>
                <li>a <b>python library</b> like <code>geopandas</code> or <code>basemap</code> providing the information for common location like the US.</li>
                <li><b>google map</b> or <b>open street map</b>.</li>
              </ul>
            </li>

            <br />

            <li>
              <u>How to plot those polygons?</u>
              <ul>
                <li>Once you get a <code>geodataframe</code> thanks to the <code>geopandas</code> package, <code>geoplot</code> is your best choice to build a static map</li>
                <li>If you need an interactive map from a <code>geodataframe</code>, <code>plotly</code> is a good option.</li>
                <li>If you want to use google map style maps, <code>folium</code> is the way to go.</li>
              </ul>
            </li>
          </ul>
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Geopandas & Geoplot"><code>Geopandas</code> and <code>GeoPlot</code></h2>
        <p>
          <code>Seaborn</code> is another great alternative to build an area chart with <code>python</code>. The below examples
          show how to start basic, apply usual customization, and use the small multiple technique
          for when you have several groups to compare.
        </p>
        <Row>
          <ChartImageContainer
            imgName="map-read-geojson-with-python-geopandas"
            caption="How to read a geoJson file with geopandas and transform it to a geodataframe."
            linkTo="/map-read-geojson-with-python-geopandas"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Geopandas & Geoplot"><code>Folium</code> for google maps style maps</h2>
        <p>
          <code>Seaborn</code> is another great alternative to build an area chart with <code>python</code>. The below examples
          show how to start basic, apply usual customization, and use the small multiple technique
          for when you have several groups to compare.
        </p>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: 30 }}>
          <Link to='/242-area-chart-and-faceting'>
            <ChartImage imgName={'242_area_chart_and_faceting'} caption={'Area chart with small multiple, seaborn'} />
          </Link>
        </div>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Basemap">Background map with <code>Basemap</code></h2>
        <p>
          <code>Seaborn</code> is another great alternative to build an area chart with <code>python</code>. The below examples
          show how to start basic, apply usual customization, and use the small multiple technique
          for when you have several groups to compare.
        </p>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: 30 }}>
          <Link to='/242-area-chart-and-faceting'>
            <ChartImage imgName={'242_area_chart_and_faceting'} caption={'Area chart with small multiple, seaborn'} />
          </Link>
        </div>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="map" />
        </Container>
      </div>

      <Spacing />


      <Container>
        <Contact />
      </Container>

      <Spacing />

    </Layout >
  );
}
