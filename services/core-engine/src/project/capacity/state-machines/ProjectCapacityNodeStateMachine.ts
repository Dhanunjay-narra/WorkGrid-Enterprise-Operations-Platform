export type ProjectCapacityNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityNodeStateMachine {
  private allowedTransitions: Record<ProjectCapacityNodeState, ProjectCapacityNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityNodeState, to: ProjectCapacityNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityNodeState, to: ProjectCapacityNodeState): ProjectCapacityNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityNode: " + from + " -> " + to);
    }
    return to;
  }
}
