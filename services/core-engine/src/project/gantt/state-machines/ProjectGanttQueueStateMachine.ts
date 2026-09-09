export type ProjectGanttQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttQueueStateMachine {
  private allowedTransitions: Record<ProjectGanttQueueState, ProjectGanttQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttQueueState, to: ProjectGanttQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttQueueState, to: ProjectGanttQueueState): ProjectGanttQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttQueue: " + from + " -> " + to);
    }
    return to;
  }
}
