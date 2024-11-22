# Running the Application with Minikube

This guide will help you run the Next.js application with Redis in a local Kubernetes cluster using Minikube.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

## Setup Steps

1. **Start Minikube**

   ```bash
   minikube start
   ```

2. **Point your shell to Minikube's Docker daemon**

   ```bash
   eval $(minikube docker-env)
   ```

3. **Build the Docker image**

   ```bash
   docker build -t star-wars-nextjs:latest .
   ```

## Deployment

1. **Deploy Redis**

   ```bash
   kubectl apply -f k8s/redis.yaml
   ```

Verify Redis is running:

```bash
kubectl get pods
```

2. **Deploy the Next.js application**

   ```bash
   kubectl apply -f k8s/deployment.yaml
   ```

Verify the application pods are running:

```bash
kubectl get pods
```

View the minikube dashboard:

```bash
minikube dashboard
```

## Accessing the Application

To access the application:

```bash
minikube service nextjs-service
```

This will automatically open your default browser with the application URL.

## Monitoring and Debugging

- **View all deployments**

  ```bash
  kubectl get deployments
  ```

- **View all services**

  ```bash
  kubectl get services
  ```

- **View pod logs**

  ```bash
  kubectl logs <pod-name>
  ```

- **Describe pod details (useful for debugging)**

  ```bash
  kubectl describe pod <pod-name>
  ```

## curl

```bash
curl $(minikube service nextjs-service --url)/api/route
```

## getting a shell in a pod

```bash
kubectl exec -it <pod-name> -- /bin/sh
```

## Common Issues and Solutions

1. **ErrImagePull or ImagePullBackOff errors**

   - Ensure you're connected to Minikube's Docker daemon
   - Verify the image name matches between your build command and deployment.yaml
   - Check that `imagePullPolicy: Never` is set in deployment.yaml

2. **Application can't connect to Redis**
   - Verify Redis pods are running
   - Check the REDIS_URL environment variable in deployment.yaml
   - Ensure redis-service is created and running

## Cleanup

To stop the Minikube cluster:

```bash
minikube stop
```

To delete the Minikube cluster:

```bash
minikube delete
```
