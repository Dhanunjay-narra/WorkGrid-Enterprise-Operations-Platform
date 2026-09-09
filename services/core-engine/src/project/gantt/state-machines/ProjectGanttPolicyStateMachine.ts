export type ProjectGanttPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttPolicyStateMachine {
  private allowedTransitions: Record<ProjectGanttPolicyState, ProjectGanttPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttPolicyState, to: ProjectGanttPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttPolicyState, to: ProjectGanttPolicyState): ProjectGanttPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
