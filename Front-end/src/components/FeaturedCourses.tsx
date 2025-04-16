
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Advanced Web Development",
    description: "Learn to build modern web applications using the latest technologies and frameworks.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    category: "Development",
    price: "$79",
    rating: 4.8,
    students: 1250,
    duration: "8 weeks"
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    description: "Master the basics of data analysis, visualization, and machine learning.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Data Science",
    price: "$89",
    rating: 4.9,
    students: 980,
    duration: "10 weeks"
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    description: "Learn effective strategies to grow businesses through digital marketing channels.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
    category: "Marketing",
    price: "$69",
    rating: 4.7,
    students: 1430,
    duration: "6 weeks"
  },
  {
    id: 4,
    title: "Financial Analysis & Planning",
    description: "Develop skills in financial analysis, budgeting, and investment planning.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1211&q=80",
    category: "Finance",
    price: "$99",
    rating: 4.8,
    students: 870,
    duration: "8 weeks"
  }
];

const FeaturedCourses = () => {
  return (
    <section className="py-20 bg-white" id="courses">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bigebrains-darkblue mb-4">Featured Courses</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our most popular courses designed to help you advance your career and achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-bigebrains-blue text-white">
                  {course.category}
                </Badge>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold line-clamp-2">{course.title}</CardTitle>
                <div className="flex items-center space-x-2 text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">{course.rating}</span>
                  <span className="text-sm text-gray-500">({course.students}+ students)</span>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription className="text-gray-600 line-clamp-3 mb-4">
                  {course.description}
                </CardDescription>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <span className="text-xl font-bold text-bigebrains-blue">{course.price}</span>
                <Button className="bg-bigebrains-blue hover:bg-bigebrains-darkblue text-white">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-bigebrains-blue text-bigebrains-blue hover:bg-bigebrains-blue hover:text-white text-lg py-6 px-8">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
