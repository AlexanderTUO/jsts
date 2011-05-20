/* Copyright (c) 2011 by The Authors.
 * Published under the LGPL 2.1 license.
 * See /license-notice.txt for the full text of the license notice.
 * See /license.txt for the full text of the license.
 */


/**
 * @requires jsts/geom/Coordinate.js
 */



/**
 * @constructor
 * @augments jsts.geom.Coordinate
 */
jsts.geom.Point = function() {
};

jsts.geom.Point = OpenLayers.Class(jsts.geom.Geometry, {
  initialize: function(coordinate) {
    if (coordinate === undefined)
      return;

    this.coordinate = coordinate;
  }
});


jsts.geom.Point.prototype.coordinate = null;

jsts.geom.Point.prototype.getCoordinate = function() {
  return this.coordinate;
};

jsts.geom.Point.prototype.isEmpty = function() {
  return this.coordinate === null;
};

jsts.geom.Point.prototype.equalsExact = function(other, tolerance) {
  if (!this.isEquivalentClass(other)) {
    return false;
  }
  if (this.isEmpty() && other.isEmpty()) {
    return true;
  }
  return this.equal(other.getCoordinate(), this.getCoordinate(), tolerance);
};

jsts.geom.Point.prototype.clone = function() {
  return new jsts.geom.Point(this.coordinate.clone());
};


/**
 * @return {String} String representation of Point type.
 */
jsts.geom.Point.prototype.getGeometryType = function() {
  return 'Point';
};


