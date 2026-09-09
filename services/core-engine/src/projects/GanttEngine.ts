import { ProjectTask, UUID } from '@nexora/types';

export interface GanttNode {
  task: ProjectTask;
  durationDays: number;
  earliestStart: number;
  earliestFinish: number;
  latestStart: number;
  latestFinish: number;
  slack: number;
  isCritical: boolean;
}

export class GanttEngine {
  public calculateCriticalPath(tasks: ProjectTask[]): Map<UUID, GanttNode> {
    const taskMap = new Map<UUID, ProjectTask>();
    tasks.forEach(t => taskMap.set(t.id, t));

    const nodes = new Map<UUID, GanttNode>();
    tasks.forEach(t => {
      const dur = t.estimatedHours ? Math.ceil(t.estimatedHours / 8) : 1;
      nodes.set(t.id, {
        task: t,
        durationDays: dur,
        earliestStart: 0,
        earliestFinish: dur,
        latestStart: 0,
        latestFinish: dur,
        slack: 0,
        isCritical: false
      });
    });

    // Forward pass: calculate earliest start & finish
    tasks.forEach(t => {
      const current = nodes.get(t.id)!;
      let maxDepFinish = 0;
      (t.dependencies || []).forEach(depId => {
        const depNode = nodes.get(depId);
        if (depNode && depNode.earliestFinish > maxDepFinish) {
          maxDepFinish = depNode.earliestFinish;
        }
      });
      current.earliestStart = maxDepFinish;
      current.earliestFinish = current.earliestStart + current.durationDays;
    });

    // Find project max completion time
    let projectDuration = 0;
    nodes.forEach(n => {
      if (n.earliestFinish > projectDuration) projectDuration = n.earliestFinish;
    });

    // Backward pass: calculate latest start, latest finish, and slack
    const reverseTasks = [...tasks].reverse();
    reverseTasks.forEach(t => {
      const current = nodes.get(t.id)!;
      let minSuccessorStart = projectDuration;

      tasks.forEach(other => {
        if ((other.dependencies || []).includes(t.id)) {
          const succNode = nodes.get(other.id);
          if (succNode && succNode.latestStart < minSuccessorStart) {
            minSuccessorStart = succNode.latestStart;
          }
        }
      });

      current.latestFinish = minSuccessorStart;
      current.latestStart = current.latestFinish - current.durationDays;
      current.slack = current.latestStart - current.earliestStart;
      current.isCritical = current.slack <= 0;
    });

    return nodes;
  }
}
