export type ProjectGanttNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttNodeStateMachine {
  private allowedTransitions: Record<ProjectGanttNodeState, ProjectGanttNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttNodeState, to: ProjectGanttNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttNodeState, to: ProjectGanttNodeState): ProjectGanttNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttNode: " + from + " -> " + to);
    }
    return to;
  }
}
