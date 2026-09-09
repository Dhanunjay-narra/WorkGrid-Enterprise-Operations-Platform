import { ProjectTask, UUID } from '@nexora/types';

export class ProjectEngine {
  private tasks = new Map<UUID, ProjectTask>();

  public createTask(projectId: UUID, title: string, priority: ProjectTask['priority']): ProjectTask {
    const task: ProjectTask = {
      id: 'task_' + Math.random().toString(36).substring(2, 9),
      projectId,
      title,
      status: 'TODO',
      priority
    };
    this.tasks.set(task.id, task);
    return task;
  }

  public updateTaskStatus(taskId: UUID, status: ProjectTask['status']): ProjectTask | null {
    const task = this.tasks.get(taskId);
    if (!task) return null;
    task.status = status;
    return task;
  }
}
