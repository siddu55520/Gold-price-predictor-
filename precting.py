import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn import metrics
# loading the csv data to a Pandas DataFrame
gold_data = pd.read_csv('gld_price_data.csv')
# print first 5 rows in the dataframe
gold_data.head()
# print last 5 rows of the dataframe
gold_data.tail()
# number of rows and columns
gold_data.shape
# getting some basic informations about the data
gold_data.info()
# checking the number of missing values
gold_data.isnull().sum()
# getting the statistical measures of the data
gold_data.describe()
# constructing a heatmap to understand the correlatiom
plt.figure(figsize = (8,8))
sns.heatmap(correlation, cbar=True, square=True, fmt='.1f',annot=True, annot_kws={'size':8}, cmap='Blues')
# correlation values of GLD
print(correlation['GLD'])
# checking the distribution of the GLD Price
sns.distplot(gold_data['GLD'],color='green')
X = gold_data.drop(['Date','GLD'],axis=1)
Y = gold_data['GLD']
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size = 0.2, random_state=2)
regressor = RandomForestRegressor(n_estimators=100)
# training the model
regressor.fit(X_train,Y_train)
# prediction on Test Data
test_data_prediction = regressor.predict(X_test)
print(test_data_prediction)
# R squared error
error_score = metrics.r2_score(Y_test, test_data_prediction)
print("R squared error : ", error_score)
Y_test = list(Y_test)
plt.plot(Y_test, color='blue', label = 'Actual Value')
plt.plot(test_data_prediction, color='green', label='Predicted Value')
plt.title('Actual Price vs Predicted Price')
plt.xlabel('Number of values')
plt.ylabel('GLD Price')
plt.legend()
plt.show()
# 1. Imports
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn import metrics

# 2. Load data
gold_data = pd.read_csv('gld_price_data.csv')
X = gold_data.drop(['Date','GLD'], axis=1)
Y = gold_data['GLD']

# 3. Train/test split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=2)

# 4. Train model
regressor = RandomForestRegressor(n_estimators=100)
regressor.fit(X_train, Y_train)

# 5. Predict
test_data_prediction = regressor.predict(X_test)

# 6. Evaluation
mae = metrics.mean_absolute_error(Y_test, test_data_prediction)
mse = metrics.mean_squared_error(Y_test, test_data_prediction)
rmse = np.sqrt(mse)

print("Mean Absolute Error (MAE):", mae)
print("Mean Squared Error (MSE):", mse)
print("Root Mean Squared Error (RMSE):", rmse)

# Import required libraries
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.svm import SVR
from sklearn.preprocessing import StandardScaler
from sklearn import metrics

# Load dataset
gold_data = pd.read_csv('gld_price_data.csv')

# Prepare features and target
X = gold_data.drop(['Date', 'GLD'], axis=1)
Y = gold_data['GLD']

# Feature Scaling (important for SVR)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Train-test split
X_train, X_test, Y_train, Y_test = train_test_split(X_scaled, Y, test_size=0.2, random_state=2)

# Create and train the SVR model
svr_model = SVR(kernel='rbf')  # You can also try 'linear' or 'poly' kernels
svr_model.fit(X_train, Y_train)

# Predict
svr_predictions = svr_model.predict(X_test)

# Evaluate
r2 = metrics.r2_score(Y_test, svr_predictions)
mae = metrics.mean_absolute_error(Y_test, svr_predictions)
mse = metrics.mean_squared_error(Y_test, svr_predictions)
rmse = np.sqrt(mse)

# Print scores
print("Support Vector Regression Results:")
print("R2 Score:", r2)
print("MAE:", mae)
print("MSE:", mse)
print("RMSE:", rmse)