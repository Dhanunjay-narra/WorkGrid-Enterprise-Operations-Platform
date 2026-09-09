export type ProjectCapacityMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityMappingStateMachine {
  private allowedTransitions: Record<ProjectCapacityMappingState, ProjectCapacityMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityMappingState, to: ProjectCapacityMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityMappingState, to: ProjectCapacityMappingState): ProjectCapacityMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityMapping: " + from + " -> " + to);
    }
    return to;
  }
}
