import 'package:flutter/material.dart';
import 'package:shimmer/shimmer.dart';

class LoadingLine extends StatelessWidget {
  final double width;
  final double height;

  LoadingLine({
    this.width = double.infinity - 50,
    this.height = 15,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
        margin: EdgeInsets.only(top: 3.5, bottom: 3.5),
        child: Shimmer.fromColors(
            baseColor: Theme.of(context).dividerColor,
            highlightColor: Theme.of(context).primaryColor,
            child: Container(
              decoration: BoxDecoration(
                color: Theme.of(context).primaryColor,
                borderRadius: BorderRadius.all(
                  Radius.circular(20.0),
                ),
              ),
              height: height,
              width: this.width,
            )));
  }
}
