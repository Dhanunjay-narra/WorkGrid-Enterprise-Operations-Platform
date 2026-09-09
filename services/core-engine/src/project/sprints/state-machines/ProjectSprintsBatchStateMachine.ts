export type ProjectSprintsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsBatchStateMachine {
  private allowedTransitions: Record<ProjectSprintsBatchState, ProjectSprintsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsBatchState, to: ProjectSprintsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsBatchState, to: ProjectSprintsBatchState): ProjectSprintsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
