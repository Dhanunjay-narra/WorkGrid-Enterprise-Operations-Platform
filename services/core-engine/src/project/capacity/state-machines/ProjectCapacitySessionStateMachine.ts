export type ProjectCapacitySessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacitySessionStateMachine {
  private allowedTransitions: Record<ProjectCapacitySessionState, ProjectCapacitySessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacitySessionState, to: ProjectCapacitySessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacitySessionState, to: ProjectCapacitySessionState): ProjectCapacitySessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacitySession: " + from + " -> " + to);
    }
    return to;
  }
}
